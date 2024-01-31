let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro excepturi assumenda, culpa cupiditate, veritatis nobis rerum blanditiis necessitatibus dolorum amet sed voluptatum aspernatur impedit ducimus veniam dicta itaque ratione!",
  };
  
  let recentProjects = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      id: 5,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
  ];
  
  let services = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/300/300",
      serviceName: "Website Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/300/300",
      serviceName: "Figma Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "SEO Marketing",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Graphic Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
  ];
  const servicesJSON = JSON.stringify(services);
localStorage.setItem("services", servicesJSON);