package com.pfe.pfebackend.api.service;

import com.pfe.pfebackend.api.dto.Semestre5DTO;
import com.pfe.pfebackend.api.helper.CsvUtils;
import com.pfe.pfebackend.api.mapper.Semestre5Mapper;
import com.pfe.pfebackend.api.repository.Semestre5Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class Semestre5Service {
    private Semestre5Repository semestre5Repository;
    private Semestre5Mapper semestre5Mapper;
    @Autowired
    public Semestre5Service(
            Semestre5Repository semestre5Repository,
            Semestre5Mapper semestre5Mapper) {
        this.semestre5Repository = semestre5Repository;
        this.semestre5Mapper = semestre5Mapper;
    }
    public void saveSemestre5(MultipartFile file) {
        try {
            List<Semestre5DTO> semestre5s = CsvUtils.csvToSemestre5(file.getInputStream() );
            semestre5Repository.saveAll(semestre5s.stream().map(semestre5Mapper::map).toList());
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public List<Semestre5DTO> getAllSemestre5() {
        return semestre5Repository.findAll().stream().map(semestre5Mapper::map).toList();
    }

}
