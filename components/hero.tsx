import { Download } from "lucide-react"
import Link from "next/link"

import Social from "@/components/social"
import Photo from "@/components/photo"

const Hero = () => {
  return (
    <section className="w-f pt-40">
        <div className="container mx-auto h-full">
            <div className="flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8">
                {/* text */}

                <div className="text-center xl:text-left">
                    <span>hello i&apos;m </span>
                    <h1 className="text-[40px] font-bold leading-[3rem] capitalize">
                        Pratim <br/>
                       <span className="under-line">Dasude</span> 
                    </h1>
                    <div className="py-8">
                        <p>I am deeply passionate about the potential of Artificial Intelligence and Machine Learning to drive innovation and solve complex problems. With proficiency in Python, TensorFlow, and React.js, I&apos;ve successfully completed projects in predictive modeling and Natural Language Processing. </p>
                    </div>
                    <div className="mt-4 flex flex-col item-center justify-center xl:flex-row xl:justify-start xl:space-x-8 ">
                        <div className="flex gap-x-2">

                            <Link 
                                  href='https://drive.google.com/file/d/1Y_Ts0dLa-6tF076_22FurTbl1uROYBS1/view?usp=sharing' 
                            className="flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-3 transition-all hover:bg-blue/80 hover:text-lighted font-medium uppercase text-blue ">

                            <span className="text-sm">Download CV</span> 

                            <Download className="size-5"/>
                            
                            
                            </Link>
                        </div>
                        <div className="'flex py-4 xl:py-0">
                            <Social/>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div>
                    <Photo/>
                </div>



            </div>
        </div>
    </section>
  )
}

export default Hero
