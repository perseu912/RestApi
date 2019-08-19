const Koa = require('koa')
const KoaRouer = require('koa-router')
const json = require('koa-json')
const path = require('path')
const render = require('koa-ejs')

const app = new Koa()
const router = new KoaRouer()

app.use(json())

router.get('/test', ctx => (ctx.body = 'hello word'))




app.use(router.routes()).use(router.allowedMethods())

app.listen(5000, () => console.debug('online na port 5000');
