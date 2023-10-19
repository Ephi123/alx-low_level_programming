import { useState } from "react"
import { Navigate } from "react-router-dom"

function About() {
 const [user,setUser] = useState('ephi')
  if(!user){
      return <Navigate to ="/" />
}
  return (
    <div>
        <p className="ml-3 text-xl italic font-bold text-white ">About</p>
        <p className=" text-gray-50 m-2">
        Recusandae, pariatur vitae alias sunt, numquam a dignissimos error quaerat optio, veniam accusamus consequatur expedita quidem similique rerum. Voluptas excepturi molestias magnam deserunt delectus et perspiciatis tempora eos reprehenderit! Architecto?
        Ut aliquam error aperiam maiores deserunt doloremque incidunt? Unde fugit velit, placeat adipisci tenetur nisi error repudiandae eum numquam voluptas eius, ad quidem ipsum culpa ratione blanditiis nobis? Provident, tempore?
        Iure magni sit corrupti voluptatibus, temporibus et atque dolorum architecto assumenda voluptatem rerum tempore impedit eos cupiditate libero repellat rem! Minus suscipit debitis perspiciatis provident tempore consequuntur commodi atque ea.
        At quidem pariatur quas obcaecati distinctio doloremque aperiam incidunt aut? Itaque a, inventore quam quaerat libero nemo neque fugit quo, pariatur alias quis voluptatum fugiat laborum unde quidem iste magnam!
        Numquam sequi corporis iusto rerum, quis error quos sapiente eveniet ea in? Dolorum rerum asperiores doloribus omnis incidunt autem aliquam, nulla laborum excepturi quidem perferendis saepe voluptas, quod nostrum rem?
        Quaerat alias ipsum nam sint voluptatem tempore optio deleniti ex incidunt. Nulla maiores, officiis impedit perspiciatis quasi sit vero mollitia placeat dignissimos veritatis possimus doloremque praesentium accusamus labore, odio aliquid.
        Error nulla quis atque. Ratione nesciunt blanditiis expedita ipsam beatae necessitatibus ab aliquid assumenda! Dolores, rerum dignissimos tempora adipisci iure accusamus ratione reprehenderit minus corrupti maiores maxime tempore, harum quibusdam.
        Asperiores incidunt enim delectus consequatur illo omnis soluta quo harum, expedita dolores rem voluptatibus ipsa numquam porro tempora! Inventore itaque reiciendis natus molestiae ipsam consect Deleniti eaque adipisci corrupti, eos a aut excepturi facilis veritatis officiis et quod debitis distinctio sunt amet? Nulla, facilis. Saepe nisi quidem aliquid, esse cum nobis. Numquam eum distinctio nam.</p>
    <button onClick={()=>setUser(null)}>Log out</button>
    </div>
  )
}

export default About