package com.pfe.pfebackend.api.service;

import com.pfe.pfebackend.api.dto.ResultatToeicDTO;
import com.pfe.pfebackend.api.helper.CsvUtils;
import com.pfe.pfebackend.api.mapper.ResultatToeicMapper;
import com.pfe.pfebackend.api.repository.ResultatToeicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ResultatToeicService {
    private ResultatToeicRepository resultatToeicRepository;
    private ResultatToeicMapper resultatToeicMapper;
    @Autowired
    public ResultatToeicService(
            ResultatToeicRepository resultatToeicRepository,
            ResultatToeicMapper resultatToeicMapper) {
        this.resultatToeicRepository = resultatToeicRepository;
        this.resultatToeicMapper = resultatToeicMapper;
    }
    public void saveResultatToeic(MultipartFile file) {
        try {
            List<ResultatToeicDTO> resultatToeics = CsvUtils.csvToResultatToeic(file.getInputStream() );
            resultatToeicRepository.saveAll(resultatToeics.stream().map(resultatToeicMapper::map).toList());
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public List<ResultatToeicDTO> getAllSMI() {
        return resultatToeicRepository.findAll().stream().map(resultatToeicMapper::map).toList();
    }
}
