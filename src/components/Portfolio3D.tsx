'use client'
import { useEffect } from 'react';

interface Skill {
  name: string;
  color: string;
  rounded: string;
  logo: string;
}

const Portfolio3D = () => {
  useEffect(() => {
    const container = document.querySelector('.portfolio-container');
    
const skills: Skill[] = [
    {
      name: "HTML5",
      color: "#ffffff",
      rounded: "20px",
      logo: "HTML5_logo.png",
    },
    {
      name: "CSS3",
      color: "#264DE4",
      rounded: "20px",
      logo: "logos_css-3.svg",
    },
    { name: "JS", color: "#F0DB4F", rounded: "20px", logo: "javascript.svg" },
    {
      name: "React",
      color: "#61DAFB",
      rounded: "20px",
      logo: "react.svg",
    },
    {
      name: "Node.js",
      color: "#68A063",
      rounded: "20px",
      logo: "nodejs.svg",
    },
    {
      name: "FastAPI",
      color: "#3776AB",
      rounded: "20px",
      logo: "fastapi.svg",
    },
    {
      name: "UI/UX",
      color: "#FF6B6B",
      rounded: "20px",
      logo: "figma.svg",
    },
    {
      name: "Git",
      color: "#F05032",
      rounded: "20px",
      logo: "git.svg",
    },
    {
      name: "MongoDB",
      color: "#00758F",
      rounded: "20px",
      logo: "mongodb.svg",
    }
  ];
    
    skills.forEach((skill, index) => {
      const skillElement = document.createElement('div');
      skillElement.className = 'skill';
      const img = document.createElement("img");
      img.src = skill.logo;
      img.alt = skill.name;
      img.style.width = "50px";
      img.style.height = "50px";
      skillElement.appendChild(img);

      skillElement.style.background = "#fff";
      skillElement.style.boxShadow = "0 0 20px rgba(0, 255, 0, 0.5)"
      skillElement.style.borderRadius = skill.rounded;
      skillElement.style.color = getContrastColor(skill.color);
      if (container) container.appendChild(skillElement);
      
      let orbitRadius, angle, speed, orbitPlane;
      
      if (index < 3) {
        orbitRadius = 250;
        angle = (index * 120) * (Math.PI / 180);
        speed = 0.003;
        orbitPlane = 'horizontal';
      } else if (index < 6) {
        orbitRadius = 200;
        angle = ((index - 3) * 120) * (Math.PI / 180);
        speed = 0.004;
        orbitPlane = 'vertical';
      } else {
        orbitRadius = 300;
        angle = ((index - 6) * 90) * (Math.PI / 180);
        speed = 0.002;
        orbitPlane = 'diagonal';
      }
      
      skillElement.dataset.orbitRadius = orbitRadius.toString();
      skillElement.dataset.angle = angle.toString();
      skillElement.dataset.speed = speed.toString();
      skillElement.dataset.orbitPlane = orbitPlane;
      
      updateSkillPosition(skillElement);
    });
    
    let animationFrameId: number;
    
    function animate() {
      const skills = document.querySelectorAll('.skill');
      skills.forEach(skill => {
        const currentAngle = parseFloat((skill as HTMLDivElement).dataset.angle || '0');
        const newAngle = currentAngle + parseFloat((skill as HTMLDivElement).dataset.speed || '0');
        (skill as HTMLDivElement).dataset.angle = newAngle.toString();
        updateSkillPosition(skill as HTMLDivElement);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    function updateSkillPosition(element: HTMLDivElement) {
      const container = document.querySelector('.portfolio-container');
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;
      
      const radius = parseFloat(element.dataset.orbitRadius || '0');
      const angle = parseFloat(element.dataset.angle || '0');
      const orbitPlane = element.dataset.orbitPlane;
      
      let x, y, z, transform;
      
      switch(orbitPlane) {
        case 'horizontal':
          x = centerX + Math.cos(angle) * radius - containerRect.left;
          y = centerY + Math.sin(angle) * radius - containerRect.top;
          transform = `translate(-50%, -50%) translateZ(0)`;
          break;
        case 'vertical':
          x = centerX + Math.cos(angle) * radius - containerRect.left;
          y = centerY - containerRect.top;
          z = Math.sin(angle) * radius;
          transform = `translate(-50%, -50%) translateZ(${z}px)`;
          break;
        case 'diagonal':
          x = centerX + Math.cos(angle) * radius - containerRect.left;
          y = centerY + Math.sin(angle) * radius * 0.7 - containerRect.top;
          z = Math.sin(angle) * radius * 0.5;
          transform = `translate(-50%, -50%) translateZ(${z}px) rotateY(${angle * 20}deg)`;
          break;
        default:
          x = centerX - containerRect.left;
          y = centerY - containerRect.top;
          transform = '';
      }
      
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.transform = transform;
    }
    
    function getContrastColor(hexColor: string) {
      const r = parseInt(hexColor.substr(1, 2), 16);
      const g = parseInt(hexColor.substr(3, 2), 16);
      const b = parseInt(hexColor.substr(5, 2), 16);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance > 0.5 ? '#333' : '#fff';
    }
    
    const handleResize = () => {
      const skills = document.querySelectorAll('.skill');
      skills.forEach(skill => updateSkillPosition(skill as HTMLDivElement));
    };
    
    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      const skills = document.querySelectorAll('.skill');
      skills.forEach(skill => {
        if (container) container.removeChild(skill);
      });
    };
  }, []);
  
  return (
    <div className="portfolio-container relative w-full h-full">
      <div 
        className="profile-image"
        style={{ backgroundImage: "url('/image.png')" }}
      ></div>
    </div>
  );
};

export default Portfolio3D;