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
 *           type: object
 *         message:
 *           type: string
 *       example:
 *         status: 0
 *         data: {}
 *         message: ''
 *   responses:
 *     BadRequest:
 *       description: Bad Request
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ApiResponse'
 *           examples:
 *             BadRequest:
 *               value:
 *                 status: 400
 *                 data: {}
 *                 message: 'エラーメッセージ'
 *     InternalServerError:
 *       description: Internal Server Error
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ApiResponse'
 *           examples:
 *             InternalServerError:
 *               value:
 *                 status: 500
 *                 data: {}
 *                 message: 'エラーメッセージ'
 */

import { NextRequest } from "next/server";




/**
 * @swagger
 * /api/test/{id}:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - test
 *     description: Swaggerのテスト用(bodyとAuthとPathとQuery)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: IDパラメータ
 *       - in: query
 *         name: query
 *         required: false
 *         schema:
 *           type: string
 *         description: クエリパラメータ
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 description: 送信するデータ
 *             required:
 *               - data
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *             examples:
 *               value:
 *                 status: 200
 *                 data: { data: 'string' }
 *                 message: ''
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
export async function POST(request: NextRequest, { params }: { params: { id: number } }) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    console.log(query)
    const path = params.id
    const body = await request.json(); 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Response(JSON.stringify({ status: 200, data: body, message: '' }), {
                headers: { 'Content-Type': 'application/json' },
                status: 200,
            }));
        }, 500); // 0.5秒遅延
    });
}
