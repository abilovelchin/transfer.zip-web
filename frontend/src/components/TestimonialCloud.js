import BIcon from "./BIcon";

const testimonials = [
  {
    quote:
      "F*****g THANK you. Everyone else has recommended site that all have limits on file size that are just too small for me ...",
    author: "Bravo-Xray",
    proof:
      "https://www.reddit.com/r/techsupport/comments/bjqmm6/comment/lj01kxe/",
  },
  {
    quote: "Love how simple and no-BS transfer.javascript.az is.",
    author: "maddogmdd",
    proof:
      "https://www.reddit.com/r/techsupport/comments/bjqmm6/comment/kilzfob/",
  },
  {
    quote:
      "... after spending hours browsing for a simple way to send a 23 GB file, this is the answer.",
    author: "amca12006",
    proof:
      "https://www.reddit.com/r/techsupport/comments/bjqmm6/comment/lgjz9lh/",
  },
];

export default function TestimonialCloud({ className }) {
  return (
    <div className={`bg-gray-50 mb-8 mt-12 border border-dashed ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="pt-8 text-center">
          <h2 className="inline-block text-lg text-gray-400">
            Trusted by more than 11 thousand users every month!
          </h2>
        </div> */}
        <div className="mx-auto pb-10 pt-12 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 md:max-w-none md:grid-cols-3">
          {testimonials.map((testimonial) => {
            return (
              <div
                key={testimonial.proof}
                className="col-span-1 text-center h-32"
              >
                <div className="text-blue-500 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <BIcon key={i} name={"star-fill"} />
                  ))}
                </div>
                <div className="text-gray-600 mb-2">
                  <p>
                    <BIcon name={"quote"} /> {testimonial.quote}
                  </p>
                </div>
                <div className="font-bold text-gray-700">
                  <BIcon name={"reddit"} className={"me-1"} />
                  <a
                    className="hover:underline"
                    target="_blank"
                    href={testimonial.proof}
                  >
                    {testimonial.author}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
