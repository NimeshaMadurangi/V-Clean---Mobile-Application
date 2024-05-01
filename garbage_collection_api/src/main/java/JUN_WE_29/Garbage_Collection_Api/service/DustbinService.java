package JUN_WE_29.Garbage_Collection_Api.service;

import JUN_WE_29.Garbage_Collection_Api.controller.dto.request.DustbinRequestDTO;
import JUN_WE_29.Garbage_Collection_Api.controller.dto.response.DustbinResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DustbinService {

    DustbinResponseDTO addDustbin(DustbinRequestDTO dustbinRequestDTODTO);

    List<DustbinResponseDTO> readAllDustbin();

    DustbinResponseDTO readDustbin(Long id);

    void deleteDustbin(Long id);

    DustbinResponseDTO updateDustbin(DustbinRequestDTO dustbinRequestDTO, Long id);
}
