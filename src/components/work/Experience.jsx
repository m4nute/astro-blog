export default function Experience({ date, role, company, items, tech, description }) {
  return (
    <section className="mt-6 pb-4">
      <p>{date}</p>
      <h3>
        {role} · {company}
      </h3>
      <p className="text-balance pb-4">{description}</p>
      <ul className="list-none pl-0 mt-1">
        {items.map((item) => {
          return (
            <li className="my-0.5">
              <strong className="pr-1">•</strong> {item}
            </li>
          )
        })}
      </ul>
      <ul className="flex list-none pl-0 pt-2 gap-2.5">
        {tech.map((item) => {
          return <div className="bg-white text-black rounded-xl px-2.5 text-sm py-0.5 font-bold">{item}</div>
        })}
      </ul>
    </section>
  )
}
