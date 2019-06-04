
const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)


// dev:false
// dir:D:\PROJECTS\app web carllx\digitalart_page
// outDir:D:\PROJECTS\app web carllx\digitalart_page\out
// distDir:D:\PROJECTS\app web carllx\digitalart_page\.next
// buildId:hd7v3YDyOP8ByVtRMBs8U
// console.log(`Environment variable <b>process.env.TEST</b> is "${process.env.TEST}"`) //undefined
// console.log(`Custom environment variables <b>process.env.BACKEND_URL</b> is "${process.env.BACKEND_URL}"`)//undefined
// console.log(`Custom environment variables \x1b[31m\x1b[1m process.env.NODE_ENV \x1b[0m is "${process.env.NODE_ENV}"`)

module.exports = {
    // outDir:`./dist`,
    exportPathMap: async function (defaultPathMap,{ dev, dir, outDir, distDir, buildId }) {
        if(dev) {return defaultPathMap};
        
        console.log(`defaultPathMap:${defaultPathMap}\ndev:${dev} \ndir:${dir} \noutDir:${outDir} \ndistDir:${distDir} \nbuildId:${buildId}`)
        await copyFile(join(`${dir}/copyfiles`, 'robots.txt'), join(outDir, 'robots.txt'))
        await copyFile(join(`${dir}/copyfiles`, '.nojekyll'), join(outDir, '.nojekyll'))
        await copyFile(join(`${dir}/copyfiles`, 'CNAME'), join(outDir, 'CNAME'))
        await copyFile(join(`${dir}/copyfiles`, 'sitemap.xml'), join(outDir, 'sitemap.xml'))
        
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/post/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } },
            '/post/learn-nextjs': { page: '/post', query: { title: 'Learn Next.js is awesome' } },
            '/post/deploy-nextjs': { page: '/post', query: { title: '😍Deploy apps with Zeit' } }
        }
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/digtalartdata' : ''
}

//git add out && git commit -m "Initial out subtree commit"
// git subtree push --prefix out origin gh-pages