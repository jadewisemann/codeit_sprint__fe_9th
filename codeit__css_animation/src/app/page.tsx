import * as motion from "motion/react-client"

export default function Home() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-md border-none bg-blue-500 px-5 py-2.5 text-white"
    >
      마우스를 올려보세요!
    </motion.button>
  )
}