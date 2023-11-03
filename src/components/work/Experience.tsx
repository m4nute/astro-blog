import { cn } from "../../utils.ts"

export default function Experience({
  date,
  role,
  company,
  items,
  tech,
  description,
}: {
  date: string | undefined
  role: string
  company: string
  items: string[]
  tech: string[]
  description: string
}) {
  return (
    <section className="mt-6 pb-4">
      <p>{date ?? Date.now()}</p>
      <h3>
        {role} · {company}
      </h3>
      <p className="text-balance pb-4">{description}</p>
      <ul className="list-none pl-0 mt-1">
        {items.map((item) => {
          return (
            <li key={item} className="my-0.5">
              <strong className="pr-1">•</strong> {item}
            </li>
          )
        })}
      </ul>
      <ul className="flex list-none pl-0 pt-2 gap-2.5">
        {tech.map((item) => {
          return (
            <li
              key={item}
              className={cn("bg-white text-black rounded-xl px-2.5 text-sm py-0.5 font-bold", {
                "bg-[#0ea5e9] text-white": item === "Tailwind CSS",
                "bg-[#f99f1e] text-black": item.startsWith("React"),
              })}>
              {item.startsWith("React")}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
