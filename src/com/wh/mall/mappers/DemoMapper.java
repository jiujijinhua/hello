package com.wh.mall.mappers;

import com.wh.mall.entity.Demo;

import java.util.List;

public interface DemoMapper {
    List<Demo> selectDemo();
    Demo selectOne(String name);
    int insetOne(Demo value);
}
