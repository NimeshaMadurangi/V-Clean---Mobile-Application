package JUN_WE_29.Garbage_Collection_Api.controller.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DustbinResponseDTO {

    private String name;

    private Float quantity;

    private Float smell;

    private String location;

}

