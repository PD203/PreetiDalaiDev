import project1img1 from '@/assets/project1/project-1.jpg';
import project1img2 from '@/assets/project1/resu1.jpg';
import project1img3 from '@/assets/project1/resu2.jpg';
import project1img4 from '@/assets/project1/resu3.jpg';
import project1img5 from '@/assets/project1/resuAuth.jpg';
import project1video from '@/assets/project1/Resumate.mp4';

import project2img1 from '@/assets/project2/project-2.jpg';
import project2img2 from '@/assets/project2/p2(2).jpg';
import project2img3 from '@/assets/project2/p2(3).jpg';
import project2img4 from '@/assets/project2/p2(4).jpg';
import project2img5 from '@/assets/project2/p2(5).jpg';
import project2img6 from '@/assets/project2/p2(6).jpg';
import project2img7 from '@/assets/project2/p2(7).jpg';
import project2video from '@/assets/project2/cosmos.mp4';

import project3img1 from '@/assets/project3/project-3.jpg';
import project3img2 from '@/assets/project3/p3(2).jpg';
import project3img3 from '@/assets/project3/p3(3).jpg';
import project3img4 from '@/assets/project3/p3(4).jpg';

import project4img1 from '@/assets/project4/project-4.png';
import project4img2 from '@/assets/project4/p4(2).png';
import project4img3 from '@/assets/project4/p4(3).png';
import project4img4 from '@/assets/project4/p4(4).png';
import project4img5 from '@/assets/project4/p4(5).png';
import project4img6 from '@/assets/project4/p4(6).png';
import project4video from '@/assets/project4/mancare.mov';

import project5img1 from '@/assets/project5/project-5.jpg';
import project5img2 from '@/assets/project5/p5(2).jpg';
import project5img3 from '@/assets/project5/p5(3).jpg';
import project5img4 from '@/assets/project5/p5(4).jpg';
import project5img5 from '@/assets/project5/p5(5).jpg';

export const projects = [
    {
      id: 1,
      title: 'Resumate - AI resume analyzer',
      description: `Many qualified candidates get rejected automatically because Applicant Tracking Systems (ATS) filter resumes based on keywords, skills, and structure. Resumate solves this problem by analyzing your resume against the specific Job Title and Job Description you’re applying for. It provides an ATS score along with AI-powered feedback on missing skills, important keywords, and structural improvements. By following these suggestions, job seekers can optimize their resumes to meet ATS requirements, increasing their chances of getting shortlisted and landing interviews.`,
      images: [project1img1, project1img2, project1img3, project1img4, project1img5],
      video: project1video,
      tags: ['React', 'vite', 'TypeScript', 'Tailwind CSS', 'Puter.js', 'Zustand'],
      keyFeatures: ['ATS Score Calculation', 'AI-Powered Feedback', 'Keyword Analysis', 'Structural Improvement Suggestions'],
      demoUrl: 'https://resumate-rosy.vercel.app/',
      githubUrl: 'https://github.com/PD203/Resumate',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Cosmos - Galaxy Website',
      description: `Cosmos is a rich, interactive, and beautifully designed 3D website for a fictional space exploration agency. It showcases the wonders of the universe through stunning visuals, smooth animations, and dynamic content fetched from the official NASA API. 
      
      This project serves as a demonstration of modern front-end development techniques, blending 3D graphics with a seamless user experience. The hero section features a captivating parallax background and a floating 3D astronaut that reacts to mouse movement, creating an immersive experience from the moment you land on the page.`,
      images: [project2img1, project2img2, project2img3, project2img4, project2img5, project2img6, project2img7],
      video: project2video,
      tags: ['React', 'vite', 'Three.js', 'React Three Fiber', 'Framer Motion', 'Tailwind CSS', 'React Router', 'Nasa API'],
      keyFeatures: ['Interactive 3D Hero', 'Dynamic NASA Content', 'Rich Animations & Effects', 'Fully Responsive Design'],
      demoUrl: 'https://3-d-landing-page2.vercel.app/',
      githubUrl: 'https://github.com/PD203/3DLandingPage2',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Furniture Business - Product page',
      description: `The goal was to create a visually calming and aesthetically pleasing interface that reflects the soothing nature of Furniture. 
      
      The design features a warm, earthy color palette, minimalist typography, and high-quality product imagery to enhance user engagement. The layout is clean and intuitive, guiding the user through the product offerings and brand story seamlessly.`,
      images: [project5img1, project5img2, project5img3, project5img4, project5img5],
      tags: ['Figma'],
      keyFeatures: ['Aesthetically Pleasing Design', 'Minimalist Typography', 'High-Quality Imagery', 'Intuitive User Experience'],
      figma: 'https://www.figma.com/design/6R79wQNPIkDRYJX7KOx3Fd/OUR-PROJECT-1?node-id=285-3&t=z27xg5ugqmBW5vhu-1',
      
      category: 'Web Design'
    },
     {
      id: 4,
      title: 'Mancare - E-commerce UI',
      description: `My goal was to demonstrate advanced front-end capabilities and a focus on premium user experience.`,
      images: [project4img1, project4img2, project4img3, project4img4, project4img5, project4img6],
      video: project4video,
      tags: ['React.js', 'Tailwind CSS', 'Figma', 'Typescript'],
      keyFeatures: ['Premium Design', 'Minimalist Typography', 'High-Quality Imagery', 'Premium User Experience'],
      demoUrl: 'https://mancare-ecom-ui.vercel.app/',
      figma: 'https://www.figma.com/design/WnToaOoZpRJLYFQ5Gs4R2N/unnamed?node-id=0-1&t=xDpSnyu66mP0JB4O-1',
      githubUrl: 'https://github.com/PD203/Mancare-ecom-ui.git',
      category: ['Web Development, ', 'Web Design']
    },
    
    {
      id: 5,
      title: 'Candle Business - landing page',
      description: `The goal was to create a visually calming and aesthetically pleasing interface that reflects the soothing nature of candles. 
      
      The design features a warm, earthy color palette, minimalist typography, and high-quality product imagery to enhance user engagement. The layout is clean and intuitive, guiding the user through the product offerings and brand story seamlessly.`,
      images: [project3img1, project3img2, project3img3, project3img4],
      tags: ['Figma'],
      keyFeatures: ['Aesthetically Pleasing Design', 'Minimalist Typography', 'High-Quality Imagery', 'Intuitive User Experience'],
      figma: 'https://www.figma.com/design/ZEIAG073ARBlVzUSn3uk83/Untitled?node-id=0-1&p=f&t=Nf6G5uMDACbGcXpr-0',
      
      category: 'Web Design'
    },
  ];