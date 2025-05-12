import { ReactNode } from "react";

export default function Error({children} : {children: ReactNode}) {
  return (
    <div>
      <p className="text-center text-white my-4 bg-pinkTail font-bold py-3 uppercase text-sm" role="alert">{children}</p>
    </div>
  )
}
