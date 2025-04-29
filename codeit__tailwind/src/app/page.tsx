export default function Home() {
  const content = [
    {
      img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Michael Foster",
      email: "michael.foster@example.com",
      position: "Co-Founder / CTO",
      activity_status: "Last seen",
      activity_latest: "3h ago",
    },
    {
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      position: "Business Relations",
      activity_status: "Online",
      activity_latest: "",
    },
  ];

  return (
    <ul role="list" className="flex flex-col gap-4 py-4">
      {content.map((person, index) => (
        <li key={index} className="flex w-full justify-between px-4">
          <div className="flex items-center gap-4">
            <img
              className="h-16 w-16 rounded-full"
              src={person.img}
              alt={`${person.name} profile`}
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden flex-col items-center justify-center sm:flex">
            <p className="text-lg font-semibold">{person.position}</p>
            {person.activity_status === "Online" ? (
              <div className="flex items-center gap-1">
                <div className="relative h-2 w-2 rounded-full bg-emerald-500">
                  <div className="absolute -inset-1 animate-ping rounded-full bg-emerald-500/20"></div>
                </div>
                <p className="text-gray-500">{person.activity_status}</p>
              </div>
            ) : (
              <p className="text-gray-500">
                {person.activity_status}{" "}
                {person.activity_latest && (
                  <time dateTime="2023-01-23T13:23Z">
                    {person.activity_latest}
                  </time>
                )}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
