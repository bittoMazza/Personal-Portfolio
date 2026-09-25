const stack = [
  'React Native',
  'React',
  'TypeScript',
  'JavaScript',
  'WordPress',
  'Cordova',
  'Agile / Jira',
  'CI/CD on AWS',
]

export function About() {
  return (
    <div className="reveal space-y-5 text-pretty">
      <p>
        In 2022 I completed <strong className="font-semibold text-ink">Boolean</strong>, an
        intensive web development bootcamp, and that’s where it all started: first WordPress sites,
        then custom websites, then React Native mobile apps and maintaining apps built with Cordova.
      </p>

      <p>
        Today I work on{' '}
        <strong className="font-semibold text-ink">enterprise projects</strong>, where code is only
        part of the job: Agile methodology, integrating a CRM with the mobile app and managing pull
        requests.
      </p>

      <div className="pt-3">
        <p className="eyebrow">Technologies I use</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
