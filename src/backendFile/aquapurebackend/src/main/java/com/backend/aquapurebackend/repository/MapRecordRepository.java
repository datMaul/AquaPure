package com.backend.aquapurebackend.repository;

//import java.util.List;
import com.backend.aquapurebackend.model.MapRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MapRecordRepository extends JpaRepository <MapRecord, Long> {
    //List<MapRecord> findBySelectedParams(String[] sources, String[] waterbodytypes, String parameter);
    //List<MapRecord> findByAuthorId(Long Author_ID);
    //List<MapRecord> findByTestKitUUID(String TestKit_UUID);
}
