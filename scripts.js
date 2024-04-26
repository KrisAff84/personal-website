function showProjects() {
    // Hide headshot and paragraph text
    document.getElementById('headshot').style.display = 'none';
    document.querySelector('.home-section p').style.display = 'none';
    document.getElementById('about-container').classList.add('hidden');

    // Show projects content
    document.getElementById('project-container').classList.remove('hidden');
}

function showProjectList(category) {
    // Hide all project lists
    var projectLists = document.querySelectorAll('.project-list');
    projectLists.forEach(function(list) {
        list.style.display = 'none';
    });

    // Show the selected project list
    var selectedList = document.getElementById(category + 'Projects');
    selectedList.style.display = 'block';
}

function hideProjectList() {
    // Hide all project lists
    var projectLists = document.querySelectorAll('.project-list');
    projectLists.forEach(function(list) {
        list.style.display = 'none';
    });

    // Hide project descriptions container
    document.getElementById('project-description-container').classList.add('hidden');
}

function showProjectDescription(project) {
    var projectContainer = document.getElementById('project-description-container');

    // Show project descriptions container
    projectContainer.classList.remove('hidden');
    projectContainer.classList.add('project-description-animation');
    
    // Delay adding 'hidden' class
    setTimeout(function() {
        projectContainer.classList.remove('project-description-animation');
    }, 400);
    
    // Hide all project descriptions
    var projectDescriptions = document.querySelectorAll('.project-description');
    projectDescriptions.forEach(function(description) {
        description.style.display = 'none';
    });

    // Show the selected project description
    var selectedDescription = document.getElementById(project + 'Description');
    selectedDescription.style.display = 'block';
}

function showAbout() {
    // Hide headshot, paragraph text, and projects content
    document.getElementById('headshot').style.display = 'none';
    document.querySelector('.home-section p').style.display = 'none';
    document.getElementById('project-container').classList.add('hidden');
    document.getElementById('project-description-container').classList.add('hidden');

    // Show about container
    document.getElementById('about-container').classList.remove('hidden');

    // Call the doubleSkills function
    doubleSkills();


    // Hide projects content
    // document.getElementById('project-container').classList.add('hidden');
    // document.getElementById('project-description-container').classList.add('hidden');
}

function doubleSkills() {
    //Appends the skill section with doubles to implement infinite scroll
    const scrollerOuter = document.getElementById("outer-scroller");
    const scrollerInner = document.getElementById("inner-scroller");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner.appendChild(duplicatedItem);
    });
}

function goHome() {
    // Show headshot and paragraph text
    document.getElementById('headshot').style.display = 'block';
    document.querySelector('.home-section p').style.display = 'block';

    // Hide projects content
    document.getElementById('project-container').classList.add('hidden');
    document.getElementById('project-description-container').classList.add('hidden');
    document.getElementById('about-container').classList.add('hidden');

    // Remove Animations from headshot and paragraph text
    document.getElementById('headshot').style.animation = 'none';
    document.querySelector('.home-section p').style.animation = 'none';
}