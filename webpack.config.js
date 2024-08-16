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