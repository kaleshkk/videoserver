exports.index = (req, res, next) => {
        res.render('index',{
            pageTitle : 'index',
            path 	  : 'app/index'
        })
    };

 exports.chat = (req, res, next) => {
        res.render('chat',{
            pageTitle : 'Chat',
            path       : 'app/chat'
        })
    };