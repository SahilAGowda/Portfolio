//=================================================typing animation============================================//
var typed = new Typed(".typing",{
    strings:["","Spontaneous","Authentic","	Adaptable","Trustworthy"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

//===================================================aside===================================================//
const nav= document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(i=0;i<totalNavList;i++)
    {
        console.log(navList[i])
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBackSection();
            for(let j=0;j<totalNavList;j++)            
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    // allSection[j].classList.add("back-section");
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1200)
            {
                asideSectionToggleBtn();
            }
        })
    }

    function removeBackSection()
    {
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }

    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }

    function showSection(element)
    {
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
             document.querySelector("#"+target).classList.add("active")
  
    }



    function updateNav(element){
        for(let i=0;i<totalNavList;i++){
            navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    document.querySelector(".hire-me").addEventListener("click",function()
    {
        const sectionIndex =this.getAttribute("data-section-index");

        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navToggleBtn = document.querySelector(".nav-toggle"),
    aside=document.querySelector(".aside");
    navToggleBtn.addEventListener("click",()=>{
        asideSectionToggleBtn();
    })
    function asideSectionToggleBtn()
    {
        aside.classList.toggle("open");
        navToggleBtn.classList.toggle("open");
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.toggle("open");
        }
    }


    //=========================================certificate section =====================================================//
    const certificateContainer = document.getElementById('certificateContainer');
    const prevCertificateButton = document.getElementById('prevCertificate');
    const nextCertificateButton = document.getElementById('nextCertificate');
    
    const certificates = [
      {
        img: 'images/portfolio/certificate.PNG',
        title: 'Google Development Student Club',
        description: 'GDSC'
      },
      {
        img: 'images/portfolio/certificate2.PNG',
        title: 'Code Red Hackathon',
        description: 'BMIST College'
      },
      {
        img: 'images/portfolio/certificate3.PNG',
        title: 'CIPHER BATTLE 2.0',
        description: 'CIT - Gubbi'
      }
    ];
    
    let currentIndex = 0;
    
    function renderCertificate(index) {
      const certificate = certificates[index];
      const certificateItem = `
        <div class="certificate-item d-flex justify-content-center">
          <div class="certificate-item-inner">
            <div class="certificate-img">
              <img src="${certificate.img}" alt="" class="img-fluid">
            </div>
            <div class="certificate-info text-center">
              <h4>${certificate.title}</h4>
              <p>${certificate.description}</p>
            </div>
          </div>
        </div>
      `;
      certificateContainer.innerHTML = certificateItem;
    }
    
    prevCertificateButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? certificates.length - 1 : currentIndex - 1;
      renderCertificate(currentIndex);
    });
    
    nextCertificateButton.addEventListener('click', () => {
      currentIndex = (currentIndex === certificates.length - 1) ? 0 : currentIndex + 1;
      renderCertificate(currentIndex);
    });
    
    renderCertificate(currentIndex);