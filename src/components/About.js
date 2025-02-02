export default function About() {
  return (
    <section id="about" className="py-20">
      
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 dark:text-accent">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-neutral dark:text-accent/80 mb-6">
              Hello! I'm Natesh Kumar, a Computer Science student at the Institute of Business Administration, Karachi. 
              I specialize in Cyber Security and Web Development, with a passion for building secure and scalable web solutions.
            </p>
            <p className="text-lg text-neutral dark:text-accent/80 mb-6">
              I enjoy working on projects that solve real-world problems, whether it's developing responsive websites or 
              creating secure systems. My goal is to deliver high-quality, user-friendly applications that make an impact.
            </p>
            <p className="text-lg text-neutral dark:text-accent/80">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {['Java', 'JavaScript', 'MERN Stack', 'WordPress', 'MySQL', 'Cyber Security'].map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/assets/profile.png" 
              alt="Natesh Kumar"
              className="rounded-full shadow-lg w-64 h-64 md:w-64 md:h-64 object-cover border-4 border-primary dark:border-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}