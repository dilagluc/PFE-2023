package com.pfe.pfebackend.api.service;
import com.pfe.pfebackend.api.dto.SmiDTO;
import com.pfe.pfebackend.api.helper.CsvUtils;
import com.pfe.pfebackend.api.mapper.SmiMapper;
import com.pfe.pfebackend.api.repository.SmiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class SmiService {
    private SmiRepository smiRepository;
    private SmiMapper smiMapper;
    @Autowired
    public SmiService(
            SmiRepository smiRepository,
            SmiMapper smiMapper) {
        this.smiRepository = smiRepository;
        this.smiMapper = smiMapper;
    }
    public void saveSMI(MultipartFile file) {
        try {
            List<SmiDTO> smis = CsvUtils.csvToSMI(file.getInputStream() );
            smiRepository.saveAll(smis.stream().map(smiMapper::map).toList());
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public List<SmiDTO> getAllSMI() {
        return smiRepository.findAll().stream().map(smiMapper::map).toList();
    }


}
