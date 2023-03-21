package com.pfe.pfebackend.api.controller;

import com.pfe.pfebackend.api.dto.ResultatToeicDTO;
import com.pfe.pfebackend.api.helper.CsvUtils;
import com.pfe.pfebackend.api.message.ResponseMessage;
import com.pfe.pfebackend.api.service.ResultatToeicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"}, methods = {RequestMethod.DELETE, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
//@RequestMapping("/api")
public class ResultatToeicController {
    private ResultatToeicService resultatToeicService;
    @Autowired
    public void resultatToeicController(ResultatToeicService resultatToeicService) {
        this.resultatToeicService = resultatToeicService;
    }
    @PostMapping("/uploadResultatToeic")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";

        if (CsvUtils.hasCSVFormat(file)) {
            try {
                //System.out.println(file);
                resultatToeicService.saveResultatToeic(file);
                message = "Uploaded the file successfully: " + file.getOriginalFilename();
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "Could not upload the file: " + file.getOriginalFilename() + "!" + e.getMessage();
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }
        }
        message = "Please upload a csv file!";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
    }

    @GetMapping("/ResultatToeic")
    public ResponseEntity<List<ResultatToeicDTO>> getAllTutorials() {
        try {
            List<ResultatToeicDTO> resultatToeicDTOS = resultatToeicService.getAllSMI();

            if (resultatToeicDTOS.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(resultatToeicDTOS, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
