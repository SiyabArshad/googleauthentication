const passport=require("passport")
const isauthenticated=(req,res,next)=>{
    if(req.user)
    {
        next()
    }
    else
    {
        res.status(500).json({
            message:"no user logged in"
        })
    }
}
module.exports=isauthenticated