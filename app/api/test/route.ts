/**
 * @swagger
 * components:
 *   schemas:
 *     ApiResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: number
 *         data:
 *           type: string
 *         message:
 *           type: string
 *       example:
 *         status: 0
 *         data: {}
 *         message: ''
 * /api/test:
 *   post:
 *     tags:
 *       - test
 *     description: Swaggerのテスト用
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *             examples:
 *                 value:
 *                   status: 200
 *                   data: { text: 'hello world'}
 *                   message: '' 
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *             examples:
 *               BadRequest:
 *                 value:
 *                   status: 400
 *                   data: {}
 *                   message: 'エラーメッセージ'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *             examples:
 *               InternalServerError:
 *                 value:
 *                   status: 500
 *                   data: {}
 *                   message: 'エラーメッセージ'
 */
export async function POST(_request: Request) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Response(JSON.stringify({ status: 200, data: 'hello world', message: '' }), {
                headers: { 'Content-Type': 'application/json' },
                status: 200,
            }));
        }, 2000); // 2秒遅延
    });
}
