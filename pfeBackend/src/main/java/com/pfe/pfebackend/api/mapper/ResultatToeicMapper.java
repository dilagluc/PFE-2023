package com.pfe.pfebackend.api.mapper;

import com.pfe.pfebackend.api.dto.ResultatToeicDTO;
import com.pfe.pfebackend.api.entity.ResultatToeic;
import org.springframework.stereotype.Component;

@Component
public class ResultatToeicMapper {
    public ResultatToeic map(ResultatToeicDTO dto) {
        return ResultatToeic.builder()
                .studentNum(dto.getStudentNum())
                .score(dto.getScore())
                .date(dto.getDate())
                .remarque(dto.getRemarque())
                .build();
    }

    public ResultatToeicDTO map(ResultatToeic resultatToeic) {
        return ResultatToeicDTO.builder()
                .studentNum(resultatToeic.getStudentNum())
                .score(resultatToeic.getScore())
                .date(resultatToeic.getDate())
                .remarque(resultatToeic.getRemarque())
                .build();
    }
}
