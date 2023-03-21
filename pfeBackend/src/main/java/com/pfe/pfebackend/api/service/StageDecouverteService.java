package com.pfe.pfebackend.api.service;

import com.pfe.pfebackend.api.dto.StageDecouverteDTO;
import com.pfe.pfebackend.api.helper.CsvUtils;
import com.pfe.pfebackend.api.mapper.StageDecouverteMapper;
import com.pfe.pfebackend.api.repository.StageDecouverteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class StageDecouverteService {
    private StageDecouverteRepository stageDecouverteRepository;
    private StageDecouverteMapper stageDecouverteMapper;
    @Autowired
    public StageDecouverteService(
            StageDecouverteRepository stageDecouverteRepository,
            StageDecouverteMapper StageDecouverteMapper) {
        this.stageDecouverteRepository = stageDecouverteRepository;
        this.stageDecouverteMapper = stageDecouverteMapper;
    }
    public void saveStageDecouverte(MultipartFile file) {
        try {
            List<StageDecouverteDTO> stageDecouvertes = CsvUtils.csvToStageDecouverte(file.getInputStream() );
            stageDecouverteRepository.saveAll(stageDecouvertes.stream().map(stageDecouverteMapper::map).toList());
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public List<StageDecouverteDTO> getAllStageDecouverte() {
        return stageDecouverteRepository.findAll().stream().map(stageDecouverteMapper::map).toList();
    }
}
