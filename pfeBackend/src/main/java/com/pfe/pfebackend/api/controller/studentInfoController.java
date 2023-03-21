package com.pfe.pfebackend.api.controller;

import com.pfe.pfebackend.api.dto.StudentInfoDTO;
import com.pfe.pfebackend.api.helper.CsvUtils;
import com.pfe.pfebackend.api.message.ResponseMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.pfe.pfebackend.api.service.StudentInfoService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"}, methods = {RequestMethod.DELETE, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
//@RequestMapping("/api")
public class studentInfoController {
    private StudentInfoService studentInfoService;
    @Autowired
    public studentInfoController(StudentInfoService studentInfoService) {
        this.studentInfoService = studentInfoService;
    }
    @PostMapping("/uploadStudentInfo")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("promotion") String promotion) {
        String message = "";

        if (CsvUtils.hasCSVFormat(file)) {
            try {
                //System.out.println(file);
                studentInfoService.saveStudentInfo(file, promotion);
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

    @GetMapping("/allStudents/{promotion}")
    public ResponseEntity<List<StudentInfoDTO>> getAllTutorials( @PathVariable String promotion) {
        try {
            List<StudentInfoDTO> studentInfoDTOS = studentInfoService.getByPromotions(promotion);

            if (studentInfoDTOS.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(studentInfoDTOS, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*@DeleteMapping("/delete/{promotion}")
    public ResponseEntity<List<StudentInfoDTO>> getAllTutorials( @PathVariable String promotion) {
        try {
            List<StudentInfoDTO> studentInfoDTOS = studentInfoService.getByPromotions(promotion);

            if (studentInfoDTOS.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(studentInfoDTOS, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

    @GetMapping("/promotions")
    public ResponseEntity<List<String>> getAllPromotions() {
        try {
            List<String> promotions = studentInfoService.getAllPromotions();

            if (promotions.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(promotions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deletePromotion/{promotion}")
    public ResponseEntity<ResponseMessage> uploadFile(@PathVariable String promotion) {
        String message = "Delete Succeeded";
        if (this.studentInfoService.deleteByPromo(promotion).isEmpty())
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage("Delete Error"));
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

    }

    @PutMapping("/updateStudent")
    public ResponseEntity<ResponseMessage> addStudent(@RequestBody StudentInfoDTO dto) {
        String message = "student Addded";
        if (this.studentInfoService.updateStudent(dto) == dto)
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage("Update Error"));

    }

    @DeleteMapping("/deleteStudent")
    public ResponseEntity<ResponseMessage> deleteStudent(@RequestParam("studentNum") Long studentNum) {
        String message = "Delete Student";
        this.studentInfoService.deleteStudentByNumber(studentNum);
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
    }


    @GetMapping("/student/{studentNum}")
    public StudentInfoDTO getById( @PathVariable Long studentNum)
    {
        return this.studentInfoService.getStudentByNumber(studentNum);
    }


}
