package com.wh.mall.dao;

import com.wh.mall.entity.Demo;
import com.wh.mall.mappers.DemoMapper;
import com.wh.mall.utils.MybatisUtil;
import org.apache.ibatis.session.SqlSession;

public class DemoTest {
    public static void main(String[] args) {
        try(SqlSession session = MybatisUtil.getSession(true)) {
            DemoMapper demo = session.getMapper(DemoMapper.class);
            demo.insetOne(new Demo().setName("东莞仔"));
            demo.selectDemo().forEach(System.out::println);
            System.out.println(demo.selectOne("大D"));
        }
    }
}
