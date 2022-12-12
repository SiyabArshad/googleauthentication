const jwt=require("jsonwebtoken")

const authController=async(req,res,next)=>{
    console.log("requesting google")
}
const authcallbackController=async(req,res,next)=>{
    if(req.user)
    {
        const token=jwt.sign(req.user,process.env.SECRETKEY,{expiresIn:`${process.env.LOGINTIME}`})
        res.cookie('connector.io',{
            user:req.user,
            token:token
        },
         { maxAge: 1000 * 60 * 60*process.env.LOGINTIME, httpOnly: true });
        res.status(200).json({
            message:"Sucessfully login",
            user:req.user,
            token:token
        })
    }
    else
    {
        res.status(500).json({
            message:"Login failed"
        }
        )
    }
}


module.exports={authController,authcallbackController}