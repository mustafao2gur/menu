import { categories } from "../data/data"

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
        <h1 className="text-orange-500 font-bold text-4xl text-center">Top Rated Menu Items</h1>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
{categories.map((item, index) => (
    <div key={index} className='bg-red-200 rounded-xl p-4 flex justify-between items-center  hover:animate-spin h-100 w-200  '>
        <h2 className="font-bold sm:text-xl">{item.name}</h2>
        <img src={item.image} alt={item.image} className='w-20'/>
    </div>
))}
        </div>
    </div>
  )
}

export default Category