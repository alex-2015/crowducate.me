// Template.curriculum.events({
// 	'submit form': function (e, template) {
// 		e.preventDefault();

//   	var lecture = {
//   		lectureTitle: $(e.target).find('[name=lectureTitle]').val(),
//   		courseId: template.data.course._id
//   	};

// 		Meteor.call('addLecture', lecture, function(error, id) { 
// 			if (error)
// 				return alert(error.reason);
//       // on success hide the modal
//       $('.modal').modal('hide');
// 		});

//     return false;

//     var section = {
//   		sectionTitle: $(e.target).find('[name=sectionTitle]').val(),
//   		courseId: template.data.course._id
//   	};

// 		Meteor.call('addSection', section, function(error, id) { 
// 			if (error)
// 				return alert(error.reason);
//       // on success hide the modal
//       $('.modal').modal('hide');
// 		});

//     return false;
// 	}
// });

Template.addSectionModal.events({
  'submit form': function(e, template){
    e.preventDefault();
    console.log('addSectionModal', template);
    var section = {
      sectionTitle: $(e.target).find('[name="sectionTitle"]').val(),
      courseId: template.data.course._id
    };

    Meteor.call('addSection', section, function(error, id) {      
      if (error)
        return alert(error.reason);
      $('.modal').modal('hide');
    });
  }
});

Template.curriculum.helpers({ 
  myCourse: function() {
    return this.userId == Meteor.userId(); 
  }
});  