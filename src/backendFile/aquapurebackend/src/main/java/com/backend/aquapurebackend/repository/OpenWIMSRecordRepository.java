package com.backend.aquapurebackend.repository;

import com.backend.aquapurebackend.model.OpenWIMSRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpenWIMSRecordRepository extends JpaRepository <OpenWIMSRecord, String> {

}
