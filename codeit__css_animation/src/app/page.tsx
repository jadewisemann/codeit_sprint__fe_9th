import * as motion from "motion/react-client"

export default function Home() {
  return (
    <motion.div
      initial = {{
        opacity: 0,
        y: 20
      }}
      animate = {{
        opacity: 1,
        y: 0
      }}
      transition = {{
        duration: 0.5,
        ease: "easeInOut"
      }}
      className="h-96 w-72 rounded-lg border shadow-md"
    >
    </motion.div>
  )
}