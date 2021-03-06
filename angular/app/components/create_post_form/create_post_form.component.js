class CreatePostFormController{
    constructor(API, ToastService){
        'ngInject';
      
        this.API = API;
        this.ToastService = ToastService;
        this.name="";
        this.topic="";
      //  this.token=csrf_token; 
    }
  
   submit(){
      if(!this.name || !this.topic){
        return false;
      }  

      var data = {
        //_token: csrf_token,
        name: this.name,
        topic: this.topic,
      };
      
       this.API.all('posts').post(data).then(() => {
         this.ToastService.show('Post added successfully');
          this.name="";
        this.topic="";
       });
    }
}

export const CreatePostFormComponent = {
    templateUrl: './views/app/components/create_post_form/create_post_form.component.html',
    controller: CreatePostFormController,
    controllerAs: 'vm',
    bindings: {}
}