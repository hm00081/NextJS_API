import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable'; // formidable을 사용하여 파일 업로드를 처리합니다.

export const config = {
    api: {
        bodyParser: false, // bodyParser를 비활성화합니다.
    },
};

export default async function upload(req: NextApiRequest, res: NextApiResponse) {
    console.log('upload');
    const form = new formidable.IncomingForm();
    //@ts-ignore
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(500).json({ error: 'File upload error' });
            return;
        }
        // 파일 처리 로직...
        console.log(files); // 업로드된 파일 정보를 로그로 출력합니다.
        res.status(200).json({ message: 'File uploaded successfully' });
    });
}
