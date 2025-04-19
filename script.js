function openNav() {
    document.getElementById("myTopnav").style.width = "60%";
  }
  
  function closeNav() {
    document.getElementById("myTopnav").style.width = "0%";
    
  }


  const modes = [
    {
      class: "light-mode",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 d="M12 3v1m0 16v1m8.66-10H21m-18 0H3m15.364 6.364l-.707.707M5.343 5.343l-.707.707m12.728 0l.707.707M5.343 18.657l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
             </svg>`
    },
    {
      class: "dark-mode",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`
    },
    {
      class: "cyber-neon-mode",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>`
    }
  ];
  

  let current = 0;

  function switchMode() {
    // Remove current class
    document.body.classList.remove(modes[current].class);
  
    // Move to next mode
    current = (current + 1) % modes.length;
  
    // Add new class
    document.body.classList.add(modes[current].class);
  
    // Update SVG icon
    const btnIcon = document.getElementById("modeBtn");
    btnIcon.innerHTML = modes[current].icon;
  }

  function switchMode2() {
    // Remove current class
    document.body.classList.remove(modes[current].class);
  
    // Move to next mode
    current = (current + 1) % modes.length;
  
    // Add new class
    document.body.classList.add(modes[current].class);
  
    // Update SVG icon
    const btnIcon = document.getElementById("modeBtn2");
    btnIcon.innerHTML = modes[current].icon;
  }
