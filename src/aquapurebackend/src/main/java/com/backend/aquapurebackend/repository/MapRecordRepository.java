package com.backend.aquapurebackend.repository;

import java.util.List;
import com.backend.aquapurebackend.model.MapRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MapRecordRepository extends JpaRepository <MapRecord, Long> {
    @Query("SELECT m FROM MapRecord m WHERE (m.SourceType IN (:sourceTypes))"
            + " AND (m.WaterBodyType IN (:waterBodyTypes))"
            + " AND (m.ParameterName = :parameterName)")
    List<MapRecord> findBySelectedParams(List<String> sourceTypes, List<String> waterBodyTypes, String parameterName);
    //List<MapRecord> findByAuthorId(Long Author_ID);
    //List<MapRecord> findByTestKitUUID(String TestKit_UUID);
}
