
import { browser, protractor,by,element} from "protractor"
export class OpenDashboardPage
{
   test= element(by.xpath("//h4[.='REST API TEST RESULT']"));

   customer=element(by.xpath("//select[@name='customers']"));

   modules=element(by.xpath("//select[@name='modules']"));

   status= element(by.css("[name='status']"));


   selectTest()
   {
     this.test.click();
   }

   selectCustomer()
   {
       this.customer.$('[value="falcon"]').click();
   }

   selectmodules()
   {
       this.modules.$('[value="createFalconPosts"]').click
   }


    selectStatus()
    {
      this.status.$('[value="PASS"]').click();
    }
}