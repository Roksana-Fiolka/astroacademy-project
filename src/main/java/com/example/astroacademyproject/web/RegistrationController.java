package com.example.astroacademyproject.web;

import com.example.astroacademyproject.service.UserService;
import com.example.astroacademyproject.web.dto.UserRegistrationDataTransfer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


//Kontoler, który pozwoli wyświetlić stronę z rejestracją
@Controller
@RequestMapping("/registration")
public class RegistrationController {

   private UserService userService;

   public RegistrationController(UserService userService){
       super();
       this.userService = userService;
   }

    @ModelAttribute("user")
    public UserRegistrationDataTransfer userRegistrationDto() {
        return new UserRegistrationDataTransfer();
    }


    @GetMapping
   public String showRegistrationForm(){
       return "registration";
   }

    @PostMapping
   public String registerUserAccount(@ModelAttribute("user") UserRegistrationDataTransfer registrationDto){
    userService.save(registrationDto);
    return "redirect:/registration?success";


   }

}
