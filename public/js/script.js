const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})



      function onDelete(CodePatient) {
        const confirm = window.confirm(
          "Voulez-vous vraiment supperimer l'utilisateur"
        );
        if (confirm) {
          fetch(`/${CodePatient}`, {
            method: "delete",
          })
            .then((res) => {
              window.location.reload();
            })
            .catch((e) => console.log(e));
        } else {
          return;
        }
      }

	  function onDelete2(id) {
        const confirm = window.confirm(
          "Voulez-vous vraiment supperimer le Rendez-Vous"
        );
        if (confirm) {
          fetch(`/rdv/${id}`, {
            method: "delete",
          })
            .then((res) => {
              window.location.reload();
            })
            .catch((e) => console.log(e));
        } else {
          return;
        }
      }



   // dunuts 
var xValues = ["Femme", "Homme"];
var yValues = [20, 15];
var barColors = [
  "#8230d4",
  "#DB504A"
  
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Classification des patients selon le genre "
    }
  }
});
