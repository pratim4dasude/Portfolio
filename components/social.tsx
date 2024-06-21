
import { FaGithub, FaMailBulk, FaLinkedin} from "react-icons/fa"

import Link from 'next/link'
const socialLinks=[
    {
        icon:<FaGithub/>,
        path:'https://github.com/pratim4dasude'
    },
    {
        icon:<FaLinkedin/>,
        path:'https://www.linkedin.com/in/pratim-dasude-937844210/'
    },
    {
        icon: <FaMailBulk />,
        path:'mailto:pratim4dasude@gmail.com'
    }

]
const Social = () => {
  return (
    <div className="flex gap-6">
        {socialLinks.map((item,index)=>(
            <Link href={item.path} key={index}
            className="flex size-10 items-center justify-center 
            border-2 border-blue text-blue duration-300 rounded-full hover:bg-blue/20 hover:transition-all">
                {item.icon}
            </Link>
        ))}
    </div>

  )
}
<FaGithub />
export default Social
