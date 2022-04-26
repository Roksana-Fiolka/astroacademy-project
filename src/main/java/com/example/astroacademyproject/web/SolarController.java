package com.example.astroacademyproject.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SolarController {
    @RequestMapping("/solar")
    public String solarController() {return "solar" ;}
}
