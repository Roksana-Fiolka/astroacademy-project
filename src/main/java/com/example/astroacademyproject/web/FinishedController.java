package com.example.astroacademyproject.web;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FinishedController {

    @GetMapping("/finished.html")
    public String finishedController() {
        return "finished.html";
    }
}
