#!/usr/bin/env node
const fs = require('fs')

const args = process.argv.slice(2)
const isBase = args.includes('--base')


if(isBase) {
    const files = ['app.js', 'server.js', '.gitignore', 'config.env']

    files.forEach(file => {
        if(!fs.existsSync(file)) {
            fs.writeFileSync(file, `//${file} created successfully`)

            console.log(`${file} successfully added to your project`)
        } else {
            console.log(`${file} already exits`)
        }
    })
} else {
    console.log('No file created. Did you want to use the --base flag?')
}


