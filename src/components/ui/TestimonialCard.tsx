interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, role, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
      <div className="relative mb-6">
        <div className="absolute -top-2 -left-2 text-5xl text-primary-300">"</div>
        <p className="text-neutral-700 italic relative z-10 pl-6 pt-3">{quote}</p>
      </div>
      <div className="flex items-center mt-4">
        {image ? (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center mr-4">
            <span className="text-primary-700 font-semibold text-lg">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-neutral-900">{author}</h4>
          {role && <p className="text-sm text-neutral-500">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;