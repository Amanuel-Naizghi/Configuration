//Start configuring web pack by
//npm init -y (this is at the file directory you want to build your project)
//npm install --save-dev webpack webpack-cli
//create your src folder add up the necessary files you want to work on

const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');//Write a command in CLI npm install --save-dev html-webpack-plugin

module.exports={
    mode: 'development',
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    },
    devtool: 'inline-source-map',//used for tracking your error, it helps the browser console to specify which file is generating an error
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body',
        }),
    ],
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],//Write a command in CLI npm install --save-dev style-loader css-loader
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
};
//N.B After finishing up the project and if the index.html(where github uses to run it) is in the dist location then you have to deploy it from
//gh-pages and you can do it by using the following commands on the terminal, but first remove the dist from .gitignore then used this commands
//1. git add dist && git commit -m "Initial dist subtree commit"
//2. git subtree push --prefix dist origin gh-pages
//Finally when you are deploying the project in the github settings>>pages make the branches to gh-pages and save it